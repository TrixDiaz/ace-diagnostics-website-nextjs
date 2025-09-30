
'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

const MessengerButton = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const locations = [
        {
            name: 'Fairview',
            url: 'https://www.facebook.com/messages/t/107740837225773',
            color: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            name: 'Valenzuela',
            url: 'https://www.facebook.com/messages/t/103167246074883',
            color: 'bg-green-500 hover:bg-green-600'
        },
        {
            name: 'Novaliches',
            url: 'https://www.facebook.com/messages/t/101707632889284',
            color: 'bg-purple-500 hover:bg-purple-600'
        }
    ]

    const handleLocationClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
        setIsOpen(false)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat options modal */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-gray-300 w-80">
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
                        <h3 className="font-semibold text-lg">Chat now</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <p className="text-gray-700 text-sm mb-4">
                            Thank you for contacting us. To serve you better please choose your preferred location:
                        </p>

                        {/* Location options */}
                        <div className="space-y-3">
                            {locations.map((location, index) => (
                                <button
                                    key={location.name}
                                    onClick={() => handleLocationClick(location.url)}
                                    className="w-full bg-white border border-gray-300 rounded-md p-3 text-left hover:bg-gray-50 hover:border-blue-300 transition-all duration-200 flex items-center gap-3"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animation: 'slideUp 0.3s ease-out forwards'
                                    }}
                                >
                                    <div className={`w-3 h-3 rounded-full ${location.color.replace('bg-', 'bg-').replace('hover:bg-', '')}`}></div>
                                    <span className="font-medium text-gray-900">{location.name} Branch</span>
                                    <MessageCircle size={16} className="text-gray-400 ml-auto" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Main messenger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 relative group"
                title={isOpen ? "Close chat options" : "Open chat options"}
            >
                {isOpen ? (
                    <svg
                        className="w-6 h-6 transition-all duration-300"
                        style={{ animationDelay: '0.1s' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <MessageCircle
                        size={24}
                        className="transition-all duration-300"
                        style={{ animationDelay: '0.1s' }}
                    />
                )}

                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {isOpen ? "Close chat options" : "Chat with us"}
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
            </button>

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}

export { MessengerButton }
