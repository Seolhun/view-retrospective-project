import React from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

export interface SidebarItemsContainerProps {
  /**
   * Set this to change SidebarItemsContainer className
   * @default false
   */
  isSizer?: boolean;
  /**
   * Set this to change SidebarItemsContainer className
   * @default undefined
   */
  className?: string;
  /**
   * Set this to change SidebarItemsContainer onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer onClick
   * @default () => null
   */
  onClick?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer onFocus
   * @default () => null
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer onMouseOut
   * @default () => null
   */
  onMouseOut?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer onMouseOver
   * @default () => null
   */
  onMouseOver?: (...args: any[]) => void;
  /**
   * Set this to change SidebarItemsContainer css
   * @default {}
   */
  css?: {};
}

const StyledSidebarItemsContainer = styled.div<SidebarItemsContainerProps>(
  () => {
    return {};
  },
);

export const SidebarItemsContainer: React.FC<SidebarItemsContainerProps> = ({
  children,
  className,
  css = {},
  isSizer = false,
  ...props
}) => {
  return (
    <StyledSidebarItemsContainer
      className={classnames('__Localize__SidebarItemsContainer', className)}
      isSizer={isSizer}
      css={css}
      {...props}
    >
      {children}
    </StyledSidebarItemsContainer>
  );
};

export default SidebarItemsContainer;