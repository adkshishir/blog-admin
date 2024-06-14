'use client';
import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SuccessToaster = ({ message }: { message: string }) => {
  useEffect(() => {
    toast.success(message);
  }, [message]);
  return <Toaster />;
};
const ErrorToaster = ({ message }: { message: string }) => {
  useEffect(() => {
    toast.error(message);
  }, [message]);
  return <Toaster />;
};

export { SuccessToaster, ErrorToaster };
