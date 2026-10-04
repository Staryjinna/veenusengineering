import Link from 'next/link';
import { Photo } from './ui';
import { ArrowIcon } from './Icons';
import { type Service, serviceCardPhoto } from '@/data/services';

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <li className="group relative flex flex-col overflow-hidden border border-steel-200 bg-white transition-colors hover:border-weld">
      <div className="relative aspect-[5/4] overflow-hidden bg-steel-200">
        <Photo
          photo={serviceCardPhoto(service)}
          alt={`${service.name}: ${serviceCardPhoto(service).alt}`}
          sizes="(min-width:1024px) 280px, (min-width:640px) 45vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 bg-ink px-3 py-1 font-display text-lg font-semibold tracking-widest text-weld">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.65rem]">
          <Link href={`/services/${service.slug}/`} className="after:absolute after:inset-0 after:content-['']">
            {service.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-steel-600">{service.summary}</p>
        <p className="mt-4 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-weld-deep">
          View service <ArrowIcon width={18} height={18} className="transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </li>
  );
}
