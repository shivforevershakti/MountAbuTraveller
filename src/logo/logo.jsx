export default function TravelLogo() {
    return (
      <svg
        width="60"
        height="60"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Road */}
        <rect x="28" y="0" width="8" height="64" fill="#444" />
        <rect x="30" y="5" width="4" height="6" fill="#fff" />
        <rect x="30" y="15" width="4" height="6" fill="#fff" />
        <rect x="30" y="25" width="4" height="6" fill="#fff" />
        <rect x="30" y="35" width="4" height="6" fill="#fff" />
  
        {/* Bus */}
        <rect x="10" y="20" width="20" height="12" rx="2" fill="#2563EB" />
        <circle cx="14" cy="34" r="3" fill="#000" />
        <circle cx="26" cy="34" r="3" fill="#000" />
  
        {/* Cab */}
        <rect x="38" y="22" width="16" height="8" rx="2" fill="#FACC15" />
        <circle cx="40" cy="32" r="3" fill="#000" />
        <circle cx="52" cy="32" r="3" fill="#000" />
      </svg>
    );
  }
  