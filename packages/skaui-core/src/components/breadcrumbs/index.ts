import { BreadcrumbItem, Breadcrumbs as _Breadcrumbs } from './Breadcrumbs'
import { BreadcrumbsProps } from './Breadcrumbs.types'

interface Breadcrumbs
	extends React.ForwardRefExoticComponent<BreadcrumbsProps> {
	Item: typeof BreadcrumbItem
}

const Breadcrumbs = _Breadcrumbs as Breadcrumbs

Breadcrumbs.Item = BreadcrumbItem

export { Breadcrumbs, BreadcrumbItem }
