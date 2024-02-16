import React from "react";
import {Footer} from "antd/es/modal/shared.js";

export default function AppFooter() {
    return (<Footer
            style={{
                textAlign: 'center',
            }}
    >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>)
}
