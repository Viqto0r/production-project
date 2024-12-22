import React, { type ErrorInfo, type ReactNode } from 'react'
import { PageError } from '@/widgets/PageError'

interface IErrorBoundaryProps {
  children: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <PageError />
    }

    return this.props.children
  }
}
