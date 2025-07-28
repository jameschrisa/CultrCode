'use client'

import { 
  Modal as HeroModal, 
  ModalContent as HeroModalContent, 
  ModalHeader as HeroModalHeader, 
  ModalBody as HeroModalBody, 
  ModalFooter as HeroModalFooter,
  ModalProps as HeroModalProps,
  ModalContentProps as HeroModalContentProps
} from '@heroui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ModalProps extends HeroModalProps {
  children: React.ReactNode
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ className, children, ...props }, ref) => (
    <HeroModal
      ref={ref}
      className={cn(className)}
      backdrop="blur"
      radius="lg"
      classNames={{
        base: "bg-primary-900/95 border border-primary-700",
        header: "border-b border-primary-700",
        body: "py-6",
        footer: "border-t border-primary-700"
      }}
      {...props}
    >
      {children}
    </HeroModal>
  )
)
Modal.displayName = "Modal"

const ModalContent = forwardRef<HTMLDivElement, HeroModalContentProps>(
  ({ className, children, ...props }, ref) => (
    <HeroModalContent
      className={cn(className)}
      {...props}
    >
      {children}
    </HeroModalContent>
  )
)
ModalContent.displayName = "ModalContent"

const ModalHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <HeroModalHeader
      className={cn("text-primary-50 font-bold", className)}
      {...props}
    />
  )
)
ModalHeader.displayName = "ModalHeader"

const ModalBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <HeroModalBody
      className={cn("text-primary-300", className)}
      {...props}
    />
  )
)
ModalBody.displayName = "ModalBody"

const ModalFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <HeroModalFooter
      className={cn("gap-2", className)}
      {...props}
    />
  )
)
ModalFooter.displayName = "ModalFooter"

export { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter }