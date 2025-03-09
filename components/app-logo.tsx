import Image from 'next/image';

export default function AppLogo() {
    return (
        <>
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
            />
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">Paradise Sharm Tours</span>
            </div>
        </>
    );
}
