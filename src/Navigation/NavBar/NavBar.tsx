import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, LucideLayoutGrid, Mail, CircleUserRound } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import './NavBar.css';

const items = [
  { id: 1, nav: '/', label: 'Home', icon: <Home className="h-[3vh] w-[3vw]" /> },
  { id: 2, nav: '/projects', label: 'Projects', icon: <LucideLayoutGrid className="h-[3vh] w-[3vw]" /> },
  { id: 3, nav: '/about', label: 'About Me', icon: <CircleUserRound className="h-[3vh] w-[3vw]" /> },
  { id: 4, nav: '/contact', label: 'Contact', icon: <Mail className="h-[3vh] w-[3vw]" /> },
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Card className="navCard">
      {items.map((item) => {
        const isActive = location.pathname === item.nav;

        return (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <button
                className={`icon ${isActive ? 'iconActive' : ''}`}
                onClick={() => navigate(item.nav)}
              >
                {item.icon}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={9} className="labels">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </Card>
  );
};

export default NavBar;
