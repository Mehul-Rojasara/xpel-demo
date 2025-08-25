import React from "react";
import Container from "@/components/ui/Container";

interface OfficeCard {
  readonly id: string;
  readonly company: string;
  readonly address: string;
  readonly phone: ReadonlyArray<{
    readonly id: string;
    readonly number: string;
  }>;
  readonly email: string;
  readonly hours: string;
}

const officeData: OfficeCard[] = [
  {
    id: 'xpel-usa',
    company: 'XPEL, Inc.',
    address: '618 W Sunset Rd, San Antonio, TX 78216, United States',
    phone: [
      { id: 'usa-phone-1', number: '+1 (210) 678-3701' },
      { id: 'usa-phone-2', number: '(800) 447-9928' }
    ],
    email: 'support@XPEL.com',
    hours: '8:30am - 5:30pm CST'
  },
  {
    id: 'xpel-india',
    company: 'XPEL India Private Limited',
    address: '38/3, Agara, Sarjapur Road(next to Jakkasandra) Koramangala Post, Bengaluru 500034, India',
    phone: [
      { id: 'india-phone-1', number: '+91 79941 35598' },
      { id: 'india-phone-2', number: '+91 79727 02628' }
    ],
    email: 'support@XPELindia.in',
    hours: '8:30 - 5:30 EST'
  }
];

export const CorporateOfficesSection: React.FC = () => {
  return (
    <section className="section-spacing-y bg-neutral-100">
      <Container>
        <h2 className="font-h2 text-neutral-900 mb-12">Corporate & International Offices</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {officeData.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const OfficeCard: React.FC<{ office: OfficeCard }> = ({ office }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-[0.875rem] p-5 lg:px-6 lg:py-[2.625rem] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] transition-all duration-300 group md:max-w-[28.667rem] w-full flex flex-col space-y-3 lg:space-y-4">
      {/* Location Pin Icon */}
      <i className="icon-Map text-neutral-900 text-3xl flex items- justify-centercenter"></i>

      {/* Company Name */}
      <h3 className="font-h4 text-neutral-900">{office.company}</h3>

      {/* Address */}
      <p className="text-neutral-900 para-small">{office.address}</p>

      {/* Contact Information */}
      <div className="para-small flex flex-col items-start gap-0.5">
        {office.phone.map((phone) => (
          <a
            href={`tel:${phone.number}`}
          key={phone.id}
            className="text-neutral-900 transition-colors duration-200 underline decoration-white decoration-1 underline-offset-4 hover:decoration-neutral-900"
          >
            {phone.number}
          </a>
        ))}
        {/* Email */}
        <a
          href={`mailto:${office.email}`}
          className="text-neutral-900  transition-colors duration-200 underline decoration-white decoration-1 underline-offset-4 hover:decoration-neutral-900"
        >
          {office.email}
        </a>

        {/* Hours */}
        <p className="text-neutral-900">{office.hours}</p>
      </div>
    </div>
  );
};
