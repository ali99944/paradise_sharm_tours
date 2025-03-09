import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UserInfo({ showEmail = false }: { showEmail?: boolean }) {

    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage src={'/images/logo.png'} alt={'sharm tours'} />
                <AvatarFallback className=" bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    {/* {getInitials(user.name)} */}
                    {'sharm tours'}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{'sharm tours'}</span>
                {showEmail && <span className="text-muted-foreground truncate text-xs">{'sharmtours@gmail.com'}</span>}
            </div>
        </>
    );
}
