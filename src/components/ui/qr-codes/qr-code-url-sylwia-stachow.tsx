export const QrCodeUrlSylwiaStachow = (
  props: React.SVGProps<SVGSVGElement> & { background?: string }
) => {
  const { fill = '#fff', background = 'none' } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <clipPath id="clip-path-dot-color">
          <circle cx="26" cy="186" r="8" transform="rotate(0,26,186)" />
          <circle cx="26" cy="202" r="8" transform="rotate(0,26,202)" />
          <circle cx="26" cy="218" r="8" transform="rotate(0,26,218)" />
          <circle cx="26" cy="330" r="8" transform="rotate(0,26,330)" />
          <circle cx="26" cy="346" r="8" transform="rotate(0,26,346)" />
          <circle cx="42" cy="170" r="8" transform="rotate(0,42,170)" />
          <circle cx="42" cy="186" r="8" transform="rotate(0,42,186)" />
          <circle cx="42" cy="234" r="8" transform="rotate(0,42,234)" />
          <circle cx="42" cy="250" r="8" transform="rotate(0,42,250)" />
          <circle cx="42" cy="266" r="8" transform="rotate(0,42,266)" />
          <circle cx="42" cy="330" r="8" transform="rotate(0,42,330)" />
          <circle cx="58" cy="154" r="8" transform="rotate(0,58,154)" />
          <circle cx="58" cy="170" r="8" transform="rotate(0,58,170)" />
          <circle cx="58" cy="250" r="8" transform="rotate(0,58,250)" />
          <circle cx="58" cy="266" r="8" transform="rotate(0,58,266)" />
          <circle cx="58" cy="282" r="8" transform="rotate(0,58,282)" />
          <circle cx="58" cy="298" r="8" transform="rotate(0,58,298)" />
          <circle cx="74" cy="170" r="8" transform="rotate(0,74,170)" />
          <circle cx="74" cy="186" r="8" transform="rotate(0,74,186)" />
          <circle cx="74" cy="202" r="8" transform="rotate(0,74,202)" />
          <circle cx="74" cy="218" r="8" transform="rotate(0,74,218)" />
          <circle cx="74" cy="234" r="8" transform="rotate(0,74,234)" />
          <circle cx="74" cy="314" r="8" transform="rotate(0,74,314)" />
          <circle cx="90" cy="154" r="8" transform="rotate(0,90,154)" />
          <circle cx="90" cy="186" r="8" transform="rotate(0,90,186)" />
          <circle cx="90" cy="202" r="8" transform="rotate(0,90,202)" />
          <circle cx="90" cy="234" r="8" transform="rotate(0,90,234)" />
          <circle cx="90" cy="282" r="8" transform="rotate(0,90,282)" />
          <circle cx="90" cy="298" r="8" transform="rotate(0,90,298)" />
          <circle cx="90" cy="314" r="8" transform="rotate(0,90,314)" />
          <circle cx="106" cy="154" r="8" transform="rotate(0,106,154)" />
          <circle cx="106" cy="186" r="8" transform="rotate(0,106,186)" />
          <circle cx="106" cy="218" r="8" transform="rotate(0,106,218)" />
          <circle cx="106" cy="250" r="8" transform="rotate(0,106,250)" />
          <circle cx="106" cy="266" r="8" transform="rotate(0,106,266)" />
          <circle cx="106" cy="298" r="8" transform="rotate(0,106,298)" />
          <circle cx="106" cy="330" r="8" transform="rotate(0,106,330)" />
          <circle cx="122" cy="154" r="8" transform="rotate(0,122,154)" />
          <circle cx="122" cy="186" r="8" transform="rotate(0,122,186)" />
          <circle cx="122" cy="218" r="8" transform="rotate(0,122,218)" />
          <circle cx="122" cy="250" r="8" transform="rotate(0,122,250)" />
          <circle cx="122" cy="282" r="8" transform="rotate(0,122,282)" />
          <circle cx="122" cy="314" r="8" transform="rotate(0,122,314)" />
          <circle cx="122" cy="346" r="8" transform="rotate(0,122,346)" />
          <circle cx="138" cy="186" r="8" transform="rotate(0,138,186)" />
          <circle cx="138" cy="250" r="8" transform="rotate(0,138,250)" />
          <circle cx="138" cy="266" r="8" transform="rotate(0,138,266)" />
          <circle cx="154" cy="42" r="8" transform="rotate(0,154,42)" />
          <circle cx="154" cy="90" r="8" transform="rotate(0,154,90)" />
          <circle cx="154" cy="122" r="8" transform="rotate(0,154,122)" />
          <circle cx="154" cy="154" r="8" transform="rotate(0,154,154)" />
          <circle cx="154" cy="170" r="8" transform="rotate(0,154,170)" />
          <circle cx="154" cy="250" r="8" transform="rotate(0,154,250)" />
          <circle cx="154" cy="266" r="8" transform="rotate(0,154,266)" />
          <circle cx="154" cy="282" r="8" transform="rotate(0,154,282)" />
          <circle cx="154" cy="346" r="8" transform="rotate(0,154,346)" />
          <circle cx="154" cy="362" r="8" transform="rotate(0,154,362)" />
          <circle cx="154" cy="394" r="8" transform="rotate(0,154,394)" />
          <circle cx="154" cy="410" r="8" transform="rotate(0,154,410)" />
          <circle cx="154" cy="442" r="8" transform="rotate(0,154,442)" />
          <circle cx="170" cy="26" r="8" transform="rotate(0,170,26)" />
          <circle cx="170" cy="42" r="8" transform="rotate(0,170,42)" />
          <circle cx="170" cy="90" r="8" transform="rotate(0,170,90)" />
          <circle cx="170" cy="106" r="8" transform="rotate(0,170,106)" />
          <circle cx="170" cy="154" r="8" transform="rotate(0,170,154)" />
          <circle cx="170" cy="170" r="8" transform="rotate(0,170,170)" />
          <circle cx="170" cy="202" r="8" transform="rotate(0,170,202)" />
          <circle cx="170" cy="298" r="8" transform="rotate(0,170,298)" />
          <circle cx="170" cy="314" r="8" transform="rotate(0,170,314)" />
          <circle cx="170" cy="330" r="8" transform="rotate(0,170,330)" />
          <circle cx="170" cy="394" r="8" transform="rotate(0,170,394)" />
          <circle cx="170" cy="426" r="8" transform="rotate(0,170,426)" />
          <circle cx="170" cy="442" r="8" transform="rotate(0,170,442)" />
          <circle cx="170" cy="458" r="8" transform="rotate(0,170,458)" />
          <circle cx="170" cy="474" r="8" transform="rotate(0,170,474)" />
          <circle cx="186" cy="74" r="8" transform="rotate(0,186,74)" />
          <circle cx="186" cy="90" r="8" transform="rotate(0,186,90)" />
          <circle cx="186" cy="106" r="8" transform="rotate(0,186,106)" />
          <circle cx="186" cy="122" r="8" transform="rotate(0,186,122)" />
          <circle cx="186" cy="154" r="8" transform="rotate(0,186,154)" />
          <circle cx="186" cy="170" r="8" transform="rotate(0,186,170)" />
          <circle cx="186" cy="186" r="8" transform="rotate(0,186,186)" />
          <circle cx="186" cy="202" r="8" transform="rotate(0,186,202)" />
          <circle cx="186" cy="218" r="8" transform="rotate(0,186,218)" />
          <circle cx="186" cy="250" r="8" transform="rotate(0,186,250)" />
          <circle cx="186" cy="266" r="8" transform="rotate(0,186,266)" />
          <circle cx="186" cy="282" r="8" transform="rotate(0,186,282)" />
          <circle cx="186" cy="298" r="8" transform="rotate(0,186,298)" />
          <circle cx="186" cy="314" r="8" transform="rotate(0,186,314)" />
          <circle cx="186" cy="330" r="8" transform="rotate(0,186,330)" />
          <circle cx="186" cy="362" r="8" transform="rotate(0,186,362)" />
          <circle cx="186" cy="394" r="8" transform="rotate(0,186,394)" />
          <circle cx="186" cy="410" r="8" transform="rotate(0,186,410)" />
          <circle cx="186" cy="426" r="8" transform="rotate(0,186,426)" />
          <circle cx="186" cy="442" r="8" transform="rotate(0,186,442)" />
          <circle cx="186" cy="474" r="8" transform="rotate(0,186,474)" />
          <circle cx="202" cy="58" r="8" transform="rotate(0,202,58)" />
          <circle cx="202" cy="74" r="8" transform="rotate(0,202,74)" />
          <circle cx="202" cy="106" r="8" transform="rotate(0,202,106)" />
          <circle cx="202" cy="154" r="8" transform="rotate(0,202,154)" />
          <circle cx="202" cy="170" r="8" transform="rotate(0,202,170)" />
          <circle cx="202" cy="202" r="8" transform="rotate(0,202,202)" />
          <circle cx="202" cy="250" r="8" transform="rotate(0,202,250)" />
          <circle cx="202" cy="298" r="8" transform="rotate(0,202,298)" />
          <circle cx="202" cy="314" r="8" transform="rotate(0,202,314)" />
          <circle cx="202" cy="330" r="8" transform="rotate(0,202,330)" />
          <circle cx="202" cy="346" r="8" transform="rotate(0,202,346)" />
          <circle cx="202" cy="362" r="8" transform="rotate(0,202,362)" />
          <circle cx="202" cy="410" r="8" transform="rotate(0,202,410)" />
          <circle cx="202" cy="458" r="8" transform="rotate(0,202,458)" />
          <circle cx="202" cy="474" r="8" transform="rotate(0,202,474)" />
          <circle cx="218" cy="26" r="8" transform="rotate(0,218,26)" />
          <circle cx="218" cy="42" r="8" transform="rotate(0,218,42)" />
          <circle cx="218" cy="58" r="8" transform="rotate(0,218,58)" />
          <circle cx="218" cy="106" r="8" transform="rotate(0,218,106)" />
          <circle cx="218" cy="122" r="8" transform="rotate(0,218,122)" />
          <circle cx="218" cy="138" r="8" transform="rotate(0,218,138)" />
          <circle cx="218" cy="154" r="8" transform="rotate(0,218,154)" />
          <circle cx="218" cy="170" r="8" transform="rotate(0,218,170)" />
          <circle cx="218" cy="218" r="8" transform="rotate(0,218,218)" />
          <circle cx="218" cy="234" r="8" transform="rotate(0,218,234)" />
          <circle cx="218" cy="266" r="8" transform="rotate(0,218,266)" />
          <circle cx="218" cy="282" r="8" transform="rotate(0,218,282)" />
          <circle cx="218" cy="298" r="8" transform="rotate(0,218,298)" />
          <circle cx="218" cy="394" r="8" transform="rotate(0,218,394)" />
          <circle cx="218" cy="426" r="8" transform="rotate(0,218,426)" />
          <circle cx="218" cy="474" r="8" transform="rotate(0,218,474)" />
          <circle cx="234" cy="42" r="8" transform="rotate(0,234,42)" />
          <circle cx="234" cy="74" r="8" transform="rotate(0,234,74)" />
          <circle cx="234" cy="90" r="8" transform="rotate(0,234,90)" />
          <circle cx="234" cy="154" r="8" transform="rotate(0,234,154)" />
          <circle cx="234" cy="186" r="8" transform="rotate(0,234,186)" />
          <circle cx="234" cy="202" r="8" transform="rotate(0,234,202)" />
          <circle cx="234" cy="250" r="8" transform="rotate(0,234,250)" />
          <circle cx="234" cy="282" r="8" transform="rotate(0,234,282)" />
          <circle cx="234" cy="314" r="8" transform="rotate(0,234,314)" />
          <circle cx="234" cy="378" r="8" transform="rotate(0,234,378)" />
          <circle cx="234" cy="410" r="8" transform="rotate(0,234,410)" />
          <circle cx="234" cy="442" r="8" transform="rotate(0,234,442)" />
          <circle cx="234" cy="474" r="8" transform="rotate(0,234,474)" />
          <circle cx="250" cy="42" r="8" transform="rotate(0,250,42)" />
          <circle cx="250" cy="58" r="8" transform="rotate(0,250,58)" />
          <circle cx="250" cy="90" r="8" transform="rotate(0,250,90)" />
          <circle cx="250" cy="122" r="8" transform="rotate(0,250,122)" />
          <circle cx="250" cy="154" r="8" transform="rotate(0,250,154)" />
          <circle cx="250" cy="170" r="8" transform="rotate(0,250,170)" />
          <circle cx="250" cy="202" r="8" transform="rotate(0,250,202)" />
          <circle cx="250" cy="218" r="8" transform="rotate(0,250,218)" />
          <circle cx="250" cy="234" r="8" transform="rotate(0,250,234)" />
          <circle cx="250" cy="298" r="8" transform="rotate(0,250,298)" />
          <circle cx="250" cy="346" r="8" transform="rotate(0,250,346)" />
          <circle cx="250" cy="362" r="8" transform="rotate(0,250,362)" />
          <circle cx="250" cy="378" r="8" transform="rotate(0,250,378)" />
          <circle cx="250" cy="410" r="8" transform="rotate(0,250,410)" />
          <circle cx="250" cy="474" r="8" transform="rotate(0,250,474)" />
          <circle cx="266" cy="26" r="8" transform="rotate(0,266,26)" />
          <circle cx="266" cy="42" r="8" transform="rotate(0,266,42)" />
          <circle cx="266" cy="74" r="8" transform="rotate(0,266,74)" />
          <circle cx="266" cy="90" r="8" transform="rotate(0,266,90)" />
          <circle cx="266" cy="106" r="8" transform="rotate(0,266,106)" />
          <circle cx="266" cy="138" r="8" transform="rotate(0,266,138)" />
          <circle cx="266" cy="154" r="8" transform="rotate(0,266,154)" />
          <circle cx="266" cy="170" r="8" transform="rotate(0,266,170)" />
          <circle cx="266" cy="202" r="8" transform="rotate(0,266,202)" />
          <circle cx="266" cy="266" r="8" transform="rotate(0,266,266)" />
          <circle cx="266" cy="282" r="8" transform="rotate(0,266,282)" />
          <circle cx="266" cy="298" r="8" transform="rotate(0,266,298)" />
          <circle cx="266" cy="314" r="8" transform="rotate(0,266,314)" />
          <circle cx="266" cy="346" r="8" transform="rotate(0,266,346)" />
          <circle cx="266" cy="378" r="8" transform="rotate(0,266,378)" />
          <circle cx="266" cy="394" r="8" transform="rotate(0,266,394)" />
          <circle cx="266" cy="426" r="8" transform="rotate(0,266,426)" />
          <circle cx="282" cy="26" r="8" transform="rotate(0,282,26)" />
          <circle cx="282" cy="42" r="8" transform="rotate(0,282,42)" />
          <circle cx="282" cy="106" r="8" transform="rotate(0,282,106)" />
          <circle cx="282" cy="122" r="8" transform="rotate(0,282,122)" />
          <circle cx="282" cy="186" r="8" transform="rotate(0,282,186)" />
          <circle cx="282" cy="218" r="8" transform="rotate(0,282,218)" />
          <circle cx="282" cy="234" r="8" transform="rotate(0,282,234)" />
          <circle cx="282" cy="250" r="8" transform="rotate(0,282,250)" />
          <circle cx="282" cy="266" r="8" transform="rotate(0,282,266)" />
          <circle cx="282" cy="314" r="8" transform="rotate(0,282,314)" />
          <circle cx="282" cy="410" r="8" transform="rotate(0,282,410)" />
          <circle cx="282" cy="458" r="8" transform="rotate(0,282,458)" />
          <circle cx="282" cy="474" r="8" transform="rotate(0,282,474)" />
          <circle cx="298" cy="26" r="8" transform="rotate(0,298,26)" />
          <circle cx="298" cy="58" r="8" transform="rotate(0,298,58)" />
          <circle cx="298" cy="74" r="8" transform="rotate(0,298,74)" />
          <circle cx="298" cy="106" r="8" transform="rotate(0,298,106)" />
          <circle cx="298" cy="154" r="8" transform="rotate(0,298,154)" />
          <circle cx="298" cy="170" r="8" transform="rotate(0,298,170)" />
          <circle cx="298" cy="186" r="8" transform="rotate(0,298,186)" />
          <circle cx="298" cy="282" r="8" transform="rotate(0,298,282)" />
          <circle cx="298" cy="330" r="8" transform="rotate(0,298,330)" />
          <circle cx="298" cy="346" r="8" transform="rotate(0,298,346)" />
          <circle cx="298" cy="362" r="8" transform="rotate(0,298,362)" />
          <circle cx="298" cy="410" r="8" transform="rotate(0,298,410)" />
          <circle cx="298" cy="474" r="8" transform="rotate(0,298,474)" />
          <circle cx="314" cy="74" r="8" transform="rotate(0,314,74)" />
          <circle cx="314" cy="90" r="8" transform="rotate(0,314,90)" />
          <circle cx="314" cy="122" r="8" transform="rotate(0,314,122)" />
          <circle cx="314" cy="138" r="8" transform="rotate(0,314,138)" />
          <circle cx="314" cy="170" r="8" transform="rotate(0,314,170)" />
          <circle cx="314" cy="186" r="8" transform="rotate(0,314,186)" />
          <circle cx="314" cy="234" r="8" transform="rotate(0,314,234)" />
          <circle cx="314" cy="250" r="8" transform="rotate(0,314,250)" />
          <circle cx="314" cy="282" r="8" transform="rotate(0,314,282)" />
          <circle cx="314" cy="346" r="8" transform="rotate(0,314,346)" />
          <circle cx="314" cy="410" r="8" transform="rotate(0,314,410)" />
          <circle cx="314" cy="426" r="8" transform="rotate(0,314,426)" />
          <circle cx="314" cy="442" r="8" transform="rotate(0,314,442)" />
          <circle cx="314" cy="474" r="8" transform="rotate(0,314,474)" />
          <circle cx="330" cy="58" r="8" transform="rotate(0,330,58)" />
          <circle cx="330" cy="74" r="8" transform="rotate(0,330,74)" />
          <circle cx="330" cy="170" r="8" transform="rotate(0,330,170)" />
          <circle cx="330" cy="202" r="8" transform="rotate(0,330,202)" />
          <circle cx="330" cy="218" r="8" transform="rotate(0,330,218)" />
          <circle cx="330" cy="298" r="8" transform="rotate(0,330,298)" />
          <circle cx="330" cy="394" r="8" transform="rotate(0,330,394)" />
          <circle cx="330" cy="426" r="8" transform="rotate(0,330,426)" />
          <circle cx="330" cy="474" r="8" transform="rotate(0,330,474)" />
          <circle cx="346" cy="26" r="8" transform="rotate(0,346,26)" />
          <circle cx="346" cy="42" r="8" transform="rotate(0,346,42)" />
          <circle cx="346" cy="58" r="8" transform="rotate(0,346,58)" />
          <circle cx="346" cy="90" r="8" transform="rotate(0,346,90)" />
          <circle cx="346" cy="122" r="8" transform="rotate(0,346,122)" />
          <circle cx="346" cy="138" r="8" transform="rotate(0,346,138)" />
          <circle cx="346" cy="170" r="8" transform="rotate(0,346,170)" />
          <circle cx="346" cy="186" r="8" transform="rotate(0,346,186)" />
          <circle cx="346" cy="202" r="8" transform="rotate(0,346,202)" />
          <circle cx="346" cy="218" r="8" transform="rotate(0,346,218)" />
          <circle cx="346" cy="250" r="8" transform="rotate(0,346,250)" />
          <circle cx="346" cy="266" r="8" transform="rotate(0,346,266)" />
          <circle cx="346" cy="298" r="8" transform="rotate(0,346,298)" />
          <circle cx="346" cy="314" r="8" transform="rotate(0,346,314)" />
          <circle cx="346" cy="330" r="8" transform="rotate(0,346,330)" />
          <circle cx="346" cy="346" r="8" transform="rotate(0,346,346)" />
          <circle cx="346" cy="362" r="8" transform="rotate(0,346,362)" />
          <circle cx="346" cy="378" r="8" transform="rotate(0,346,378)" />
          <circle cx="346" cy="394" r="8" transform="rotate(0,346,394)" />
          <circle cx="346" cy="410" r="8" transform="rotate(0,346,410)" />
          <circle cx="346" cy="458" r="8" transform="rotate(0,346,458)" />
          <circle cx="362" cy="154" r="8" transform="rotate(0,362,154)" />
          <circle cx="362" cy="170" r="8" transform="rotate(0,362,170)" />
          <circle cx="362" cy="218" r="8" transform="rotate(0,362,218)" />
          <circle cx="362" cy="234" r="8" transform="rotate(0,362,234)" />
          <circle cx="362" cy="266" r="8" transform="rotate(0,362,266)" />
          <circle cx="362" cy="282" r="8" transform="rotate(0,362,282)" />
          <circle cx="362" cy="298" r="8" transform="rotate(0,362,298)" />
          <circle cx="362" cy="314" r="8" transform="rotate(0,362,314)" />
          <circle cx="362" cy="330" r="8" transform="rotate(0,362,330)" />
          <circle cx="362" cy="346" r="8" transform="rotate(0,362,346)" />
          <circle cx="362" cy="410" r="8" transform="rotate(0,362,410)" />
          <circle cx="362" cy="442" r="8" transform="rotate(0,362,442)" />
          <circle cx="362" cy="474" r="8" transform="rotate(0,362,474)" />
          <circle cx="378" cy="186" r="8" transform="rotate(0,378,186)" />
          <circle cx="378" cy="266" r="8" transform="rotate(0,378,266)" />
          <circle cx="378" cy="282" r="8" transform="rotate(0,378,282)" />
          <circle cx="378" cy="314" r="8" transform="rotate(0,378,314)" />
          <circle cx="378" cy="330" r="8" transform="rotate(0,378,330)" />
          <circle cx="378" cy="346" r="8" transform="rotate(0,378,346)" />
          <circle cx="378" cy="378" r="8" transform="rotate(0,378,378)" />
          <circle cx="378" cy="410" r="8" transform="rotate(0,378,410)" />
          <circle cx="378" cy="458" r="8" transform="rotate(0,378,458)" />
          <circle cx="378" cy="474" r="8" transform="rotate(0,378,474)" />
          <circle cx="394" cy="186" r="8" transform="rotate(0,394,186)" />
          <circle cx="394" cy="202" r="8" transform="rotate(0,394,202)" />
          <circle cx="394" cy="218" r="8" transform="rotate(0,394,218)" />
          <circle cx="394" cy="234" r="8" transform="rotate(0,394,234)" />
          <circle cx="394" cy="266" r="8" transform="rotate(0,394,266)" />
          <circle cx="394" cy="282" r="8" transform="rotate(0,394,282)" />
          <circle cx="394" cy="330" r="8" transform="rotate(0,394,330)" />
          <circle cx="394" cy="346" r="8" transform="rotate(0,394,346)" />
          <circle cx="394" cy="410" r="8" transform="rotate(0,394,410)" />
          <circle cx="394" cy="426" r="8" transform="rotate(0,394,426)" />
          <circle cx="394" cy="458" r="8" transform="rotate(0,394,458)" />
          <circle cx="394" cy="474" r="8" transform="rotate(0,394,474)" />
          <circle cx="410" cy="154" r="8" transform="rotate(0,410,154)" />
          <circle cx="410" cy="186" r="8" transform="rotate(0,410,186)" />
          <circle cx="410" cy="218" r="8" transform="rotate(0,410,218)" />
          <circle cx="410" cy="282" r="8" transform="rotate(0,410,282)" />
          <circle cx="410" cy="330" r="8" transform="rotate(0,410,330)" />
          <circle cx="410" cy="346" r="8" transform="rotate(0,410,346)" />
          <circle cx="410" cy="362" r="8" transform="rotate(0,410,362)" />
          <circle cx="410" cy="378" r="8" transform="rotate(0,410,378)" />
          <circle cx="410" cy="394" r="8" transform="rotate(0,410,394)" />
          <circle cx="410" cy="410" r="8" transform="rotate(0,410,410)" />
          <circle cx="410" cy="458" r="8" transform="rotate(0,410,458)" />
          <circle cx="410" cy="474" r="8" transform="rotate(0,410,474)" />
          <circle cx="426" cy="170" r="8" transform="rotate(0,426,170)" />
          <circle cx="426" cy="186" r="8" transform="rotate(0,426,186)" />
          <circle cx="426" cy="202" r="8" transform="rotate(0,426,202)" />
          <circle cx="426" cy="218" r="8" transform="rotate(0,426,218)" />
          <circle cx="426" cy="298" r="8" transform="rotate(0,426,298)" />
          <circle cx="426" cy="314" r="8" transform="rotate(0,426,314)" />
          <circle cx="426" cy="394" r="8" transform="rotate(0,426,394)" />
          <circle cx="426" cy="426" r="8" transform="rotate(0,426,426)" />
          <circle cx="426" cy="442" r="8" transform="rotate(0,426,442)" />
          <circle cx="426" cy="458" r="8" transform="rotate(0,426,458)" />
          <circle cx="442" cy="170" r="8" transform="rotate(0,442,170)" />
          <circle cx="442" cy="266" r="8" transform="rotate(0,442,266)" />
          <circle cx="442" cy="314" r="8" transform="rotate(0,442,314)" />
          <circle cx="442" cy="330" r="8" transform="rotate(0,442,330)" />
          <circle cx="442" cy="346" r="8" transform="rotate(0,442,346)" />
          <circle cx="442" cy="362" r="8" transform="rotate(0,442,362)" />
          <circle cx="442" cy="426" r="8" transform="rotate(0,442,426)" />
          <circle cx="442" cy="442" r="8" transform="rotate(0,442,442)" />
          <circle cx="442" cy="458" r="8" transform="rotate(0,442,458)" />
          <circle cx="442" cy="474" r="8" transform="rotate(0,442,474)" />
          <circle cx="458" cy="154" r="8" transform="rotate(0,458,154)" />
          <circle cx="458" cy="186" r="8" transform="rotate(0,458,186)" />
          <circle cx="458" cy="202" r="8" transform="rotate(0,458,202)" />
          <circle cx="458" cy="234" r="8" transform="rotate(0,458,234)" />
          <circle cx="458" cy="250" r="8" transform="rotate(0,458,250)" />
          <circle cx="458" cy="266" r="8" transform="rotate(0,458,266)" />
          <circle cx="458" cy="282" r="8" transform="rotate(0,458,282)" />
          <circle cx="458" cy="298" r="8" transform="rotate(0,458,298)" />
          <circle cx="458" cy="394" r="8" transform="rotate(0,458,394)" />
          <circle cx="458" cy="426" r="8" transform="rotate(0,458,426)" />
          <circle cx="458" cy="458" r="8" transform="rotate(0,458,458)" />
          <circle cx="458" cy="474" r="8" transform="rotate(0,458,474)" />
          <circle cx="474" cy="218" r="8" transform="rotate(0,474,218)" />
          <circle cx="474" cy="250" r="8" transform="rotate(0,474,250)" />
          <circle cx="474" cy="282" r="8" transform="rotate(0,474,282)" />
          <circle cx="474" cy="298" r="8" transform="rotate(0,474,298)" />
          <circle cx="474" cy="378" r="8" transform="rotate(0,474,378)" />
          <circle cx="474" cy="410" r="8" transform="rotate(0,474,410)" />
          <circle cx="474" cy="458" r="8" transform="rotate(0,474,458)" />
          <path
            clipRule="evenodd"
            d="M 18 58v 32a 40 40, 0, 0, 0, 40 40h 32a 40 40, 0, 0, 0, 40 -40v -32a 40 40, 0, 0, 0, -40 -40h -32a 40 40, 0, 0, 0, -40 40M 58 34h 32a 24 24, 0, 0, 1, 24 24v 32a 24 24, 0, 0, 1, -24 24h -32a 24 24, 0, 0, 1, -24 -24v -32a 24 24, 0, 0, 1, 24 -24"
            transform="rotate(0,74,74)"
          />
          <circle cx="74" cy="74" r="24" transform="rotate(0,74,74)" />
          <path
            clipRule="evenodd"
            d="M 370 58v 32a 40 40, 0, 0, 0, 40 40h 32a 40 40, 0, 0, 0, 40 -40v -32a 40 40, 0, 0, 0, -40 -40h -32a 40 40, 0, 0, 0, -40 40M 410 34h 32a 24 24, 0, 0, 1, 24 24v 32a 24 24, 0, 0, 1, -24 24h -32a 24 24, 0, 0, 1, -24 -24v -32a 24 24, 0, 0, 1, 24 -24"
            transform="rotate(90,426,74)"
          />
          <circle cx="426" cy="74" r="24" transform="rotate(90,426,74)" />
          <path
            clipRule="evenodd"
            d="M 18 410v 32a 40 40, 0, 0, 0, 40 40h 32a 40 40, 0, 0, 0, 40 -40v -32a 40 40, 0, 0, 0, -40 -40h -32a 40 40, 0, 0, 0, -40 40M 58 386h 32a 24 24, 0, 0, 1, 24 24v 32a 24 24, 0, 0, 1, -24 24h -32a 24 24, 0, 0, 1, -24 -24v -32a 24 24, 0, 0, 1, 24 -24"
            transform="rotate(-90,74,426)"
          />
          <circle cx="74" cy="426" r="24" transform="rotate(-90,74,426)" />
        </clipPath>
      </defs>
      <rect
        x="0"
        y="0"
        height="500"
        width="500"
        clipPath="url('#clip-path-background-color')"
        fill={background}
      />
      <rect
        x="0"
        y="0"
        height="500"
        width="500"
        clipPath="url('#clip-path-dot-color')"
        fill={fill}
      />
    </svg>
  )
}
