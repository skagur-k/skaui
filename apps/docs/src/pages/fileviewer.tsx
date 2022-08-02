import { NextPage } from 'next'
import { File, Folder, FileViewer } from '../components/fileviewer'
import PageLayout from '../layouts/PageLayout'

const diff = `+ added this line
- deleted this line
`

const gitignore = `node_modules
./dist
.turbo
.next
`

const jsx = `export * from './FileViewer'`

const packagejson = `{
	"name": "@skaui/docs",
	"version": "0.0.0",
	"private": true,
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start",
		"lint": "next lint",
		"test": "jest --coverage",
		"clean": "rm -rf .turbo && rm -rf .next && rm -rf node_modules"
	},
}
`

const stylescss = `body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
`

const Temp: NextPage = () => {
	return (
		<PageLayout>
			<FileViewer title='Hello World'>
				<Folder name='src'>
					<File name='File1.diff' language='diff' content={diff} />
					<File name='File2.jsx' content={jsx} />
					<File name='.gitignore' language='git' content={gitignore} />
					<File name='package.json' language='json' content={packagejson} />
					<File name='styles.css' language='css' content={stylescss} />
				</Folder>
			</FileViewer>
		</PageLayout>
	)
}

export default Temp
