'use client'

import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage'
import { storage } from '@/firebase.config'
import { useState } from 'react'

export const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!file) {
      return
    }
    const fileRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(fileRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      (error) => {
        console.error('Error uploading file:', error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadUrl(downloadURL)
        })
      }
    )
  }

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = file?.name || ''
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className={'flex flex-col items-center justify-center mt-4'}>
      <h1 className={'text-3xl font-bold mb-4'}>File upload</h1>

      <input type={'file'} onChange={handleFileChange} />

      <button
        className={'bg-blue-500 text-white px-4 py-2 mt-2 rounded'}
        onClick={handleUpload}
      >
        Upload
      </button>

      {progress > 0 && (
        <progress value={progress} max={100} className={'mt-2'} />
      )}

      {downloadUrl && (
        <div className={'mt-4'}>
          <p>File uploaded successfully!</p>
          <a
            href={downloadUrl}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={'underline'}
          >
            Download URL
          </a>
        </div>
      )}
    </div>
  )
}
