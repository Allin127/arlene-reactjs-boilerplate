import React from 'react'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


export const SubMenuConfig = [
    {
        name: 'First',
        path: '/first',
        icon: <AppstoreOutlined/>
    },
    {
        name: 'Second',
        path: '/second',
        icon: <BarChartOutlined/>
    },
    {
        name: 'Third',
        path: '/third',
        icon: <CloudOutlined/>,
        children:[
            {
                name: 'Sub First',
                path: '/third/first',
                icon: <ShopOutlined/>
            },
            {
                name: 'Sub Second',
                path: '/third/second',
                icon: <TeamOutlined/>
            },
            {
                name: 'Sub Third',
                path: '/third/third',
                icon: <UserOutlined/>
            }
        ]
    },
    {
        name: 'LongPage',
        path: '/longPage',
        icon: <UploadOutlined/>
    },
    {
        name: '404',
        path: '/404Page',
        icon: <VideoCameraOutlined/>
    }
]