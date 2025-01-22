import IconDocuments from '../../assets/icons/icon-documents.svg?react'
import IconDocumentsActive from '../../assets/icons/icon-documents-active.svg?react'

const DEFAULT_PATH = `/documents`

export const documentsSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Documents`,
    icon: <IconDocuments />,
    iconActive: <IconDocumentsActive />,
  },
]