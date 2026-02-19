(function() {

    'use strict';

    // init sidebar toggle
    function initSidebarToggle() {
        const navbarBurger = document.querySelector('.navbar__burger');
        const sidebar = document.querySelector('.sidebar');
        const sidebarClose = sidebar?.querySelector('.sidebar__close');

        if (!navbarBurger || !sidebar || !sidebarClose) return;

        function openMenu() {
            sidebar.classList.add('is-open');
        }

        function closeMenu() {
            sidebar.classList.remove('is-open');
        }

        navbarBurger.addEventListener('click', openMenu);
        sidebarClose.addEventListener('click', closeMenu);
    }    


    // init tabs
    function initTabs() {
        const tabsNav = document.querySelector('.tabs');
        if (!tabsNav) return;

        const tabButtons = tabsNav.querySelectorAll('.tabs__link');
        const tabSections = document.querySelectorAll('.content__block');

        function activateTab(button) {
            const targetId = button.dataset.target;

            tabButtons.forEach(btn => btn.classList.remove('is-active'));
            tabSections.forEach(section => section.hidden = true);

            button.classList.add('is-active');

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.hidden = false;
            }
        }

        tabButtons.forEach(button => {
            button.addEventListener('click', () => activateTab(button));
        });

        const initialActive = tabsNav.querySelector('.tabs__link.is-active') || tabButtons[0];
        if (initialActive) activateTab(initialActive);
    }


    document.addEventListener('DOMContentLoaded', ()=> {
        initSidebarToggle();
        initTabs();
    });

    

})();