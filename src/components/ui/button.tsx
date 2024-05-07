import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "skipinline-flex skipitems-center skipjustify-center skipwhitespace-nowrap skiprounded-md skiptext-sm skipfont-medium skipring-offset-background skiptransition-colors focus-visible:skipoutline-none focus-visible:skipring-2 focus-visible:skipring-ring focus-visible:skipring-offset-2 disabled:skippointer-events-none disabled:skipopacity-50",
  {
    variants: {
      variant: {
        default: "skipbg-primary skiptext-primary-foreground hover:skipbg-primary/90",
        destructive:
          "skipbg-destructive skiptext-destructive-foreground hover:skipbg-destructive/90",
        outline:
          "skipborder skipborder-input skipbg-background hover:skipbg-accent hover:skiptext-accent-foreground",
        secondary:
          "skipbg-secondary skiptext-secondary-foreground hover:skipbg-secondary/80",
        ghost: "hover:skipbg-accent hover:skiptext-accent-foreground",
        link: "skiptext-primary skipunderline-offset-4 hover:skipunderline",
      },
      size: {
        default: "skiph-10 skippx-4 skippy-2",
        sm: "skiph-9 skiprounded-md skippx-3",
        lg: "skiph-11 skiprounded-md skippx-8",
        icon: "skiph-10 skipw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
