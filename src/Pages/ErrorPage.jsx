import React from 'react';
import { Link, useRouteError } from 'react-router';
import { Home, RefreshCw, Leaf } from 'lucide-react';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
                {/* Plant Icon */}
                <div className="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-12 h-12 text-emerald-600" />
                </div>

                {/* Error Code */}
                <h1 className="text-8xl font-bold text-emerald-600 mb-4">
                    {error?.status || 404}
                </h1>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Oops! Page Not Found
                </h2>

                {/* Message */}
                <p className="text-gray-600 mb-6">
                    The plant care page you're looking for seems to have wilted away...
                </p>

                {/* Error Details (Dev only) */}
                {process.env.NODE_ENV === 'development' && error?.message && (
                    <div className="mb-6 p-4 bg-red-50 rounded-lg text-left">
                        <p className="text-sm text-red-700 font-mono">
                            {error.message}
                        </p>
                    </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className="inline-flex items-center justify-center gap-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-6 rounded-lg transition-all duration-200"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;