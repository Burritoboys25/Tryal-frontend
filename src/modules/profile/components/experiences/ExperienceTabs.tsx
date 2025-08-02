import { Button } from '@/shared/components/ui/base/button'
import React from 'react'

type ExperienceTabsProps = {
  tab: string,
  setTab: (tabName: string) => void;
}

const ExperienceTabs = ({ tab, setTab } : ExperienceTabsProps) => {
  return (
    <div className="mt-2 flex gap-2.5">
      <Button
        type="button"
        variant={'text'}
        name="upcoming"
        onClick={e => setTab(e.currentTarget.name)}
        className={`cursor-pointer rounded-none px-3 ${tab == 'upcoming' ? 'border-b-2 border-black' : 'hover:border-muted-foreground hover:border-b-2'}`}
      >
        {/* text-muted-foreground */}
        <span
          className={`text-button hover:text-foreground ${tab == 'upcoming' ? 'text-foreground' : 'text-muted-foreground'}`}
        >
          Upcoming
        </span>
      </Button>
      <Button
        type="button"
        variant={'text'}
        name="saved"
        onClick={e => setTab(e.currentTarget.name)}
        className={`cursor-pointer rounded-none px-3 ${tab == 'saved' ? 'border-b-2 border-black' : 'hover:border-muted-foreground hover:border-b-2'}`}
      >
        <span
          className={`text-button hover:text-foreground ${tab == 'saved' ? 'text-foreground' : 'text-muted-foreground'}`}
        >
          Saved
        </span>
      </Button>
      <Button
        type="button"
        variant={'text'}
        name="past"
        onClick={e => setTab(e.currentTarget.name)}
        className={`cursor-pointer rounded-none px-3 ${tab == 'past' ? 'border-b-2 border-black' : 'hover:border-muted-foreground hover:border-b-2'}`}
      >
        <span
          className={`text-button hover:text-foreground ${tab == 'past' ? 'text-foreground' : 'text-muted-foreground'}`}
        >
          Past
        </span>
      </Button>
    </div>
  )
}

export default ExperienceTabs
