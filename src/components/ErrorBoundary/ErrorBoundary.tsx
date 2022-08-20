import React, { Component, ErrorInfo, ReactElement } from 'react'

type TError = Error | null

type TProps = {
    children: ReactElement
}

type TState = {
    hasError: boolean
}

class ErrorBoundary extends Component<TProps, TState> {
    constructor(props: TProps) {
        super(props)
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error: TError) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: TError, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary
