export interface DashboardProps {
    children?: React.ReactNode;
    title: string;
    enableDrawer:boolean;
    buttonSelected: string;
  
    content: Array<DrawerHr | DrawerTypo | DrawerButton>;
  
    logouthref: string;
    getusername: () => Promise<string | undefined>;
}

export interface DrawerHr {
type: 'hr';
}

export interface DrawerTypo {
type: 'typo',
text: string,
variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface DrawerButton {
type: 'button',
text: string,
href: string,
icon? : React.ReactNode;
}
  