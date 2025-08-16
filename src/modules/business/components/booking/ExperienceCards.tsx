import { ScrollArea, ScrollBar } from '@/shared/components/ui/base/scroll-area'
import { Experience } from '@/shared/types/experienceTypes'
import DefaultImage from '../../../../../public/default_experience_image.png'
import Image from 'next/image'
import React, { useState } from 'react'
import { Badge } from '@/shared/components/ui/base/badge'
import CreditIcon from '@/shared/assets/icons/credit.svg'

const ExperienceCards = ({ experiences }: { experiences: Experience[] }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  if (!experiences || experiences.length === 0) {
    return <div className="py-[2.5rem] text-center text-2xl">No experiences available</div>
  }
  return (
    <section>
      <div className="text-sub3 mb-[1rem]">Available Classes</div>
      <ScrollArea className="w-full" orientation="horizontal">
        <div className="flex flex-row gap-[1rem] overflow-x-auto pb-[0.5rem]">
          {experiences.map(exp => (
            <div
              key={exp.experienceId}
              onClick={() => setSelectedId(exp.experienceId)}
              className={`hover:bg-muted/50 mb-[1rem] flex h-[24.875rem] w-[17.8125rem] flex-col items-center rounded-xl border-2 bg-white p-[1rem] shadow-md transition-all duration-300 hover:cursor-pointer ${
                selectedId === exp.experienceId ? 'border-primary font-bold' : 'border-transparent'
              }`}
            >
              <Image
                src={DefaultImage}
                alt={'Experience Image'}
                width={261}
                height={186}
                className="rounded-t-xl object-cover"
              />
              {/* Card Content */}
              <div className="flex flex-1 flex-col rounded-b-xl pt-[0.5rem]">
                <div className="mb-[0.5rem] flex items-start justify-between">
                  <div className="text-sub3">{exp.experienceName}</div>
                  <Badge className="bg-accent flex h-[2.5rem] w-[3.9375rem] items-center">
                    <span className="text-sub4 text-foreground flex items-center gap-[0.375rem]">
                      <CreditIcon className="!h-[1.5rem] !w-[1.5rem]" />
                      {exp.creditPrice}
                    </span>
                  </Badge>
                </div>
                <div className="text-body2 text-muted-foreground mb-[0.5rem] line-clamp-3">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}

export default ExperienceCards
