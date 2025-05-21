import React from 'react';
import MainNavbar from '@/shared/components/layout/MainNavbar';
import MainFooter from '@/shared/components/layout/MainFooter';

type LayoutType = 'main' | 'partner';

type ViewLayoutProps = {
  type?: LayoutType | null;
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const ViewLayout = ({ type, children, header, footer }: ViewLayoutProps) => {
  let defaultNavbar: React.ReactNode = null;
  let defaultFooter: React.ReactNode = null;

  switch (type) {
    case 'main':
      defaultNavbar = <MainNavbar />;
      defaultFooter = <MainFooter />;
      break;
    case 'partner':
      defaultNavbar = <MainNavbar disablePartner={true}/>;
      defaultFooter = <MainFooter />;
      break;
    default:
      break;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {header ?? defaultNavbar}
      <main className="mt-[69px] flex-grow">{children}</main>
      {footer ?? defaultFooter}
    </div>
  );
};

export default ViewLayout;
