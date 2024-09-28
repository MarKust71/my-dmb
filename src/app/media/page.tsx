const Component = () => {
  const FIREBASE_STORAGE_URL =
    'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2FdMb-Business-Plan.mp4?alt=media&token=2cf899d0-43c0-4a18-bf0c-03623014d76a'

  return (
    <>
      {/*
      <iframe
        src="https://drive.google.com/file/d/1jch2so5_EYMWX4ITYtT6yCNGePGH6p4V/preview"
        width="960"
        height="720"
        allow="autoplay"
      ></iframe>
*/}

      <video width="960" height="720" controls controlsList="nodownload">
        <source src={FIREBASE_STORAGE_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}

export default Component
