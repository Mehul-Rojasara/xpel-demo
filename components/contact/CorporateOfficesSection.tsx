import React from 'react';
import Container from '@/components/ui/Container';

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
    <section className="pt-[274px] pb-24 bg-neutral-100">
      <Container>
        <div className="mb-20">
          <h2 className="font-display font-medium text-neutral-900 text-[3rem] leading-[110%] tracking-[-0.01em] mb-6">
            Corporate & International Offices
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
    <div className="bg-white border border-neutral-200 rounded-[14px] p-6 shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] transition-all duration-300 group w-[458.67px] h-[380px] flex flex-col justify-between">
      {/* Location Pin Icon */}
      <div className="mb-6">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="icon-Map text-neutral-900 text-2xl"></i>
        </div>
      </div>

      {/* Company Name */}
      <h3 className="font-display font-medium text-neutral-900 mb-4 text-[1.5rem] leading-[110%] tracking-[-0.01em]">
        {office.company}
      </h3>

      {/* Address */}
      <div className="mb-6">
        <p className="font-sans text-neutral-700 leading-[150%] tracking-[0.01em] font-[450] text-[1.125rem]">
          {office.address}
        </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        {/* Phone Numbers */}
        <div>
          {office.phone.map((phone) => (
            <p key={phone.id} className="font-sans text-neutral-900 leading-[150%] tracking-[0.01em] font-[450] text-[1.125rem] mb-2">
              {phone.number}
            </p>
          ))}
        </div>

        {/* Email */}
        <div>
          <a 
            href={`mailto:${office.email}`}
            className="font-sans text-neutral-600 hover:text-neutral-900 transition-colors duration-200 leading-[150%] tracking-[0.01em] font-[450] text-[1.125rem] underline decoration-neutral-400 decoration-2 underline-offset-4 hover:decoration-neutral-600"
          >
            {office.email}
          </a>
        </div>

        {/* Hours */}
        <div>
          <p className="font-sans text-neutral-700 leading-[150%] tracking-[0.01em] font-[450] text-[1.125rem]">
            {office.hours}
          </p>
        </div>
      </div>
    </div>
  );
}; 