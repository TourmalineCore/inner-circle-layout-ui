import IconDocuments from '../../assets/icons/icon-documents.svg'
import IconDocumentsActive from '../../assets/icons/icon-documents-active.svg'
// import { ReactComponent as IconDocuments } from '../../assets/icons/icon-documents.svg'
// import { ReactComponent as IconDocumentsActive } from '../../assets/icons/icon-documents-active.svg'

const DEFAULT_PATH = `/documents`

export const documentsSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Documents`,
    icon: <img src={IconDocuments} />,
    iconActive: <img src={IconDocumentsActive} />,
  },
]