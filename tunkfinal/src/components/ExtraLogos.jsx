import logoGoogle from "@/images/logos/google-cloud-logo.svg";
import logoMicrosoft from "@/images/logos/Microsoft_logo.svg";
import logoAWS from "@/images/logos/Amazon_Web_Services_Logo.svg";
import logoStartupIndia from "@/images/logos/startup-india-hub-logo.svg";

import Image from "next/image";

const ExtraLogos = () => {
  const logos = [
    { _id: 2001, title: "Google for Startups Cloud Program", logo: logoGoogle },
    { _id: 2002, title: "Microsoft for Startups", logo: logoMicrosoft },
    { _id: 2003, title: "AWS Lift", logo: logoAWS },
    {
      _id: 2004,
      title: "Startup India DPIIT Recognition",
      logo: logoStartupIndia,
    },
  ];
  return (
    <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
      <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
        Our Technology Partner
      </p>
      <ul
        role="list"
        className="mx-auto mt-8 flex max-w-xl justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
      >
        {logos.map(({ title, logo }) => (
          <li key={title}>
            <Image src={logo} alt={title} height={32} unoptimized />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraLogos;
