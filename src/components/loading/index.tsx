"use client";

import { useEffect, useState } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner = ({
  size = "md",
  className = "",
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]} ${className}`}
    />
  );
};

export const LoadingDots = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex space-x-1 ${className}`}>
      <div
        className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <div
        className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <div
        className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
};

export const SkeletonCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8">
          <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="p-8 bg-gray-50">
          <div className="h-[50vh] bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export const ImageSkeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}>
      <div className="flex items-center justify-center h-full">
        <LoadingSpinner size="lg" />
      </div>
    </div>
  );
};

export const PageLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <div className="text-lg text-gray-600">Loading...</div>
        <LoadingDots className="justify-center mt-2" />
      </div>
    </div>
  );
};

export const ContentLoading = () => {
  return (
    <div className="space-y-12">
      {[1, 2, 3].map((index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};
