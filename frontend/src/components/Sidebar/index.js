import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = 'about' onClick={toggle} smooth = {true}>
                        О нас
                    </SidebarLink>
                    <SidebarLink to="training" onClick={toggle} smooth = {true}>
                        Тренировки
                    </SidebarLink>
                    <SidebarLink to = "team" onClick={toggle} smooth = {true}>
                        Команда
                    </SidebarLink>
                    <SidebarLink to = "courts" onClick={toggle} smooth = {true}>
                        Корты
                    </SidebarLink>
                    <SidebarLink to = "contacts" onClick={toggle} smooth = {true}>
                        Контакты
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/signin'> Войти </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
