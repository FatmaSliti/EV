/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { AsideMenuItemWithSubMain } from './AsideMenuItemWithSubMain'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        // title='Home'
        title='Dashboard'
        fontIcon='bi-house fs-2'
        bsTitle={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        className='py-2'
      />
      {/* <AsideMenuItemWithSubMain
        to='/crafted/pages'
        title='Management'
        fontIcon='bi-file-text'
        bsTitle='Device Management'
      /> */}
      <AsideMenuItemWithSubMain
        to='/crafted/pages'
        title='Management'
        fontIcon='bi-file-text'
        bsTitle='Device Management'
      >
        {/* <AsideMenuItem
          to='/crafted/pages/profile/overview'
          title='Overview'
          hasBullet={true}
          bsTitle='Overview'
        /> */}
        <AsideMenuItem
          to='/crafted/pages/profile/chargers'
          title='Chargers'
          hasBullet={true}
          bsTitle='Chargers'
        />

        <AsideMenuItem
          to='/crafted/pages/profile/charger-configuration'
          title='Charger Configuration'
          hasBullet={true}
          bsTitle='Charger Configuration'
        />

        <AsideMenuItem
          to='/crafted/pages/profile/third-party-mapping'
          title='3rd Party mapping'
          hasBullet={true}
          bsTitle='3rd Party mapping'
        />


        {/* <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/profile/overview'
            title='Overview'
            bsTitle='Overview'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/projects'
            title='Projects'
            bsTitle='Projects'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            bsTitle='Campaigns'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            bsTitle='Documents'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
            bsTitle='Connections'
          />
        </AsideMenuItemWithSub> */}

        {/* <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
            bsTitle='Horizontal'
          />
          <AsideMenuItem
            to='/crafted/pages/wizards/vertical'
            title='Vertical'
            bsTitle='Vertical'
            hasBullet={true}
          />
        </AsideMenuItemWithSub> */}

        {/* <AsideMenuItemWithSub to='/crafted/accounts' title='Accounts' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/account/overview'
            title='Overview'
            hasBullet={true}
            bsTitle='Overview'
          />
          <AsideMenuItem
            to='/crafted/account/settings'
            title='Settings'
            hasBullet={true}
            bsTitle='Settings'
          />
        </AsideMenuItemWithSub> */}

        {/* <AsideMenuItemWithSub to='/crafted/widgets' title='Widgets' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/widgets/lists'
            title='Lists'
            bsTitle='Lists'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/statistics'
            title='Statistics'
            bsTitle='Statistics'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/charts'
            title='Charts'
            bsTitle='Charts'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/mixed'
            title='Mixed'
            bsTitle='Mixed'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/tables'
            title='Tables'
            bsTitle='Tables'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/feeds'
            title='Feeds'
            bsTitle='Feeds'
            hasBullet={true}
          />
        </AsideMenuItemWithSub> */}

        {/* <AsideMenuItemWithSub to='/apps/chat' title='Chat' hasBullet={true}>
          <AsideMenuItem
            to='/apps/chat/private-chat'
            title='Private Chat'
            bsTitle='Private Chat'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/apps/chat/group-chat'
            title='Group Chart'
            bsTitle='Group Chart'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/apps/chat/drawer-chat'
            title='Drawer Chart'
            bsTitle='Drawer Chart'
            hasBullet={true}
          />
        </AsideMenuItemWithSub> */}
        {/* <AsideMenuItemWithSub to='/error' title='Errors' hasBullet={true}>
          <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
          <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
        </AsideMenuItemWithSub> */}
        {/* <AsideMenuItem
          to='/apps/user-management/users'
          title='User management'
          hasBullet={true}
          bsTitle='User management'
        /> */}

        {/* <AsideMenuItem
          to='/charger'
          title='Chargers'
          hasBullet={true}
          bsTitle='Chargers'
        /> */}

        {/* <AsideMenuItem
          to='/apps/user-management/users'
          title='Charger Configuration'
          hasBullet={true}
          bsTitle='Charger Configuration'
        />

        <AsideMenuItem
          to='/apps/user-management/users'
          title='3rd Party mapping'
          hasBullet={true}
          bsTitle='3rd Party mapping'
        /> */}

      </AsideMenuItemWithSubMain>

      {/* <AsideMenuItemWithSubMain
        to='/builder'
        title='Resources'
        bsTitle='Resources'
        fontIcon='bi-gear'
      >
        <AsideMenuItem to='/builder' title='Layout builder' fontIcon='bi-layers fs-3' />
        <AsideMenuItem
          to={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
          outside={true}
          title={`Changelog ${process.env.REACT_APP_VERSION}`}
          fontIcon='bi-card-text fs-3'
        />
      </AsideMenuItemWithSubMain> */}

      {/* <AsideMenuItemWithSubMain
        to='/crafted/pages'
        title='Management'
        fontIcon='bi-file-text'
        bsTitle='Device Management'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/profile/overview'
            title='Overview'
            bsTitle='Overview'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/projects'
            title='Projects'
            bsTitle='Projects'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            bsTitle='Campaigns'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            bsTitle='Documents'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
            bsTitle='Connections'
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
            bsTitle='Horizontal'
          />
          <AsideMenuItem
            to='/crafted/pages/wizards/vertical'
            title='Vertical'
            bsTitle='Vertical'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/accounts' title='Accounts' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/account/overview'
            title='Overview'
            hasBullet={true}
            bsTitle='Overview'
          />
          <AsideMenuItem
            to='/crafted/account/settings'
            title='Settings'
            hasBullet={true}
            bsTitle='Settings'
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/widgets' title='Widgets' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/widgets/lists'
            title='Lists'
            bsTitle='Lists'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/statistics'
            title='Statistics'
            bsTitle='Statistics'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/charts'
            title='Charts'
            bsTitle='Charts'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/mixed'
            title='Mixed'
            bsTitle='Mixed'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/tables'
            title='Tables'
            bsTitle='Tables'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/feeds'
            title='Feeds'
            bsTitle='Feeds'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/apps/chat' title='Chat' hasBullet={true}>
          <AsideMenuItem
            to='/apps/chat/private-chat'
            title='Private Chat'
            bsTitle='Private Chat'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/apps/chat/group-chat'
            title='Group Chart'
            bsTitle='Group Chart'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/apps/chat/drawer-chat'
            title='Drawer Chart'
            bsTitle='Drawer Chart'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/error' title='Errors' hasBullet={true}>
          <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
          <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItem
          to='/apps/user-management/users'
          title='User management'
          hasBullet={true}
          bsTitle='User management'
        />
      </AsideMenuItemWithSubMain> */}

      {/* <AsideMenuItemWithSubMain
        to='/builder'
        title='Resources'
        bsTitle='Resources'
        fontIcon='bi-gear'
      >
        <AsideMenuItem to='/builder' title='Layout builder' fontIcon='bi-layers fs-3' />
        <AsideMenuItem
          to={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
          outside={true}
          title={`Changelog ${process.env.REACT_APP_VERSION}`}
          fontIcon='bi-card-text fs-3'
        />
      </AsideMenuItemWithSubMain> */}
      <AsideMenuItemWithSubMain
        to='/transactions'
        title='Transactions'
        bsTitle='Transactions'
        fontIcon='bi-gear'
      >
        <AsideMenuItem to='/transactionsSummary' title='Transactions summary' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/detailedTransactions' title='Detailed Transactions' fontIcon='bi-card-text fs-3' />
        {/* <AsideMenuItem to='detailedTransactions' title='Detailed transactions' fontIcon='bi-card-text fs-3' /> */}
        
      </AsideMenuItemWithSubMain>
    </>
  )
}
// outside={true}
