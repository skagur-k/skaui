import { InlineCode, KBD, Tabs, Button } from '@skaui/core'
import { NextPage } from 'next'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'
import { Container } from '../../components/container'
import { useState } from 'react'
import Link from 'next/link'

const defaultCode = `
<Tabs title="Tabs">
	<Tabs.Item key="panel1" title="Panel 1">
		Panel Body 1
	</Tabs.Item>
	<Tabs.Item key="panel2" title="Panel 2">
		Panel Body 2
	</Tabs.Item>
	<Tabs.Item key="panel3" title="Panel 3">
		Panel Body 3
	</Tabs.Item>
</Tabs>`
const defaultScope = { Tabs }

const selectionCode = `
<Tabs title="Tabs" defaultSelectedKey="panel2">
	<Tabs.Item key="panel1" title="Panel 1">
		Panel Body 1
	</Tabs.Item>
	<Tabs.Item key="panel2" title="Panel 2">
		Panel Body 2
	</Tabs.Item>
	<Tabs.Item key="panel3" title="Panel 3">
		Panel Body 3
	</Tabs.Item>
</Tabs>`
const selectionScope = { Tabs }

const disabledCode = `
<Tabs title="Tabs" disabledKeys={['panel1']}>
	<Tabs.Item key="panel1" title="Panel 1">
		Panel Body 1
	</Tabs.Item>
	<Tabs.Item key="panel2" title="Panel 2">
		Panel Body 2
	</Tabs.Item>
	<Tabs.Item key="panel3" title="Panel 3">
		Panel Body 3
	</Tabs.Item>
</Tabs>`
const disabledScope = { Tabs }

const orientationCode = `
<Tabs title="Tabs" orientation="vertical">
	<Tabs.Item key="panel1" title="Panel 1">
		Panel Body 1
	</Tabs.Item>
	<Tabs.Item key="panel2" title="Panel 2">
		Panel Body 2
	</Tabs.Item>
	<Tabs.Item key="panel3" title="Panel 3">
		Panel Body 3
	</Tabs.Item>
</Tabs>`
const orientationScope = { Tabs }

const CollapsiblePage: NextPage = () => {
	const [selected, setSelected] = useState('panel1')
	const controlledCode = `() =>
{

return(
	<Container col>
		<Tabs title="Tabs" selectedKey={selected} onSelectionChange={setSelected}>
			<Tabs.Item key="Panel 1" title="Panel 1">
				Panel Body 1
			</Tabs.Item>
			<Tabs.Item key="Panel 2" title="Panel 2">
				Panel Body 2
			</Tabs.Item>
			<Tabs.Item key="Panel 3" title="Panel 3">
				Panel Body 3
			</Tabs.Item>
		</Tabs>
	</Container>
)}`
	const controlledScope = { Tabs, Container, selected, setSelected }

	const [tabs, setTabs] = useState([
		{ id: 1, title: 'Tab 1', content: 'Tab body 1' },
		{ id: 2, title: 'Tab 2', content: 'Tab body 2' },
		{ id: 3, title: 'Tab 3', content: 'Tab body 3' },
	])

	const dynamicCode = `() =>
{
	function handleAdd() {
		setTabs((tabs) => [
			...tabs,
			{
				id: ${tabs.length + 1},
				title: "${`Tab ${tabs.length + 1}`}",
				content: "Tab Body ${tabs.length + 1}"
			}
		])
	}

function handleRemove() {
	if(tabs.length > 1) {
		setTabs((tabs) => tabs.slice(0, -1))
	}
}

return(
	<Container col>
		<Container>
			<Button size="sm" type="success" onPress={handleAdd}>Add Tab</Button>
			<Button size="sm" type="error" onPress={handleRemove}>Remove Tab</Button>
		</Container>
		<Tabs title="Tabs" items={tabs}>
			{(item) => (<Tabs.Item title={item.title}>{item.content}</Tabs.Item>)}
		</Tabs>
	</Container>
)}`
	const dynamicScope = { Tabs, Container, tabs, setTabs, Button }

	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Tabs</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					A UI Component that organizes content into multiple sections and
					allows users to navigate between them.
				</h3>
				<h3 className='text-base text-neutral-400'>
					Tabs can be focused with <KBD>Tab</KBD> key and its panels can be
					nagivated with <KBD>Arrow</KBD> keys.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Panels</h2>
					<IDE code={defaultCode} scope={defaultScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default Selected</h2>
					<h3 className='text-lg text-neutral-400'>
						Default selected panel can be selected with{' '}
						<InlineCode>defaultSelectedKey</InlineCode> prop.
					</h3>
					<IDE code={selectionCode} scope={selectionScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled</h2>
					<h3 className='text-lg text-neutral-400'>
						Default selected panel can be selected with{' '}
						<InlineCode>defaultSelectedKey</InlineCode> prop.
					</h3>
					<IDE code={controlledCode} scope={controlledScope}>
						<p>
							Selected Tab: <span className='font-bold'>{selected}</span>
						</p>
					</IDE>
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Dynamic Items</h2>
					<h3 className='text-lg text-neutral-400'>
						Tabs Component adopts{' '}
						<Link href='https://react-spectrum.adobe.com/react-stately/collections.html'>
							React Aria&apos;s Collection Components API.
						</Link>{' '}
						It accepts both static and dynamic collections. The following
						example shows Tabs component. with dynamic collections. Tabs can be
						added or removed dynamically or its data can come from external
						source.
					</h3>
					<IDE code={dynamicCode} scope={dynamicScope}>
						<p>
							List of tabs:{' '}
							{tabs.map((tab) => (
								<span className='font-bold'>{tab.title + ' '}</span>
							))}
						</p>
					</IDE>
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Disabled Panel</h2>
					<h3 className='text-lg text-neutral-400'>
						Panels can be disabled via <InlineCode>isDisabled</InlineCode> prop.
					</h3>
					<IDE code={disabledCode} scope={disabledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Orientation</h2>
					<h3 className='text-lg text-neutral-400'>
						Orientation can be switched to &apos;vertical&apos; with{' '}
						<InlineCode>orientation</InlineCode> prop.
					</h3>
					<IDE code={orientationCode} scope={orientationScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default CollapsiblePage
