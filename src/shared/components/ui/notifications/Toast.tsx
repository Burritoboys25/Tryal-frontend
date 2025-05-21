import { toast, ToastOptions } from 'react-hot-toast'

type ToastType = 'success' | 'error' | 'waitlist'
type ToastPosition = 'bottom-center' | 'top-center'

interface ShowToastProps {
  type?: ToastType
  description?: string
  position?: ToastPosition
}

export function showToast({ type, description, position = 'bottom-center' }: ShowToastProps) {
  const options: ToastOptions = {
    position: position,
    duration: 2000,
  }

  switch (type) {
    case 'success':
      toast.success('Success!', options)
      return
    case 'error':
      toast.error('Something went wrong.', options)
      return
    case 'waitlist':
      toast.success(`${description}`, options)
      return
    default:
      toast('Default Notification', {
        ...options,
        icon: '👏',
      })
      return
  }

  /*
  toast.custom(
    t => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } pointer-events-auto flex w-full max-w-md rounded-md border-l-4 shadow-lg`}
      >
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-current" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    ),
  )
  */
}
