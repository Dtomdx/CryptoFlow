

export interface NavItem {
    id: string;
    label: string;
    href: string;
    icon?: React.ComponentType;
    external?: boolean;
    badge?: {
        text: string;
        variant: 'default'| 'success' | 'warning'
    };
    requiresAuth?: boolean;
    isCTA?: boolean
}

export interface NavigationConfig {
    main: NavItem[];
    auth: {
        loggedOut: NavItem[]
        loggedIn: NavItem[]
    };
    mobile: NavItem[]
}