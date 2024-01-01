import Image from 'next/image'

const WhatsappContact = () => {
  return (
    <div className="absolute bottom-1 right-1">
      <a
        href="https://wa.me/qr/S5PAJU4FHHGZM1"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/*
        <img src="/img/wa-contact.png" alt="Whatsapp" width="200px" />
*/}
        <Image
          src="/img/wa-contact.png"
          alt="Whatsapp"
          width={200}
          height={229}
        />
      </a>
    </div>
  )
}

export default WhatsappContact
