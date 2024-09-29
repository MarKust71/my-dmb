const Component = () => {
  const FIREBASE_STORAGE_URL =
    'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2FdMb-Business-Plan.mp4?alt=media'
  const BACKGROUND_IMAGE_URL =
    'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fpower-campus-2024-10-zoom-background.jpeg?alt=media'

  return (
    <div
      className={`min-h-screen bg-blue-200 bg-cover bg-no-repeat flex flex-col pt-48`}
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <video
        width="960"
        height="720"
        controls
        controlsList="nodownload"
        className={'p-4 md:p-12'}
      >
        <source src={FIREBASE_STORAGE_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Component
