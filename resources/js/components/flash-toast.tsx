import { useEffect } from "react";
import { usePage, router } from "@inertiajs/react";
import toast, { Toaster } from 'react-hot-toast'

type FlashProps = {
    success?: string;
    error?: string;
};

type PageProps = {
    flash?: FlashProps;
};

export default function FlashToasts() {
    const { flash } = usePage<PageProps>().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
            router.reload({ only: [] });
        }
        if (flash?.error) {
            toast.error(flash.error);
            router.reload({ only: [] });
        }
    }, [flash]);

    return <Toaster position="top-right" />;
}