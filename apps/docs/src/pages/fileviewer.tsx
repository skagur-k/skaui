import { NextPage } from 'next'
import { File, Folder, FileViewer } from '../components/fileviewer'
import PageLayout from '../layouts/PageLayout'

const exampleCode1 = `function someDemo() {
  var test = "Hello World!";
  console.log(test);
}();

return () => <App />;
function someDemo() {
  var test = "Hello World!";
  console.log(test);
}();

return () => <App />;
function someDemo() {
  var test = "Hello World!";
  console.log(test);
}();

return () => <App />;
function someDemo() {
  var test = "Hello World!";
  console.log(test);
}();

return () => <App />;
function someDemo() {
  var test = "Hello World!";
  console.log(test);
}();

return () => <App />;
function someDemo() {
  var test = "Hello World!";
  console.log(test);
}();

return () => <App />;
`

const exampleCode2 = `function someDemo() {
  var test = "Hello World!";
  console.log(test);
}();

return () => <App />;
`

const diff = `+ added this line
- deleted this line
`

const Temp: NextPage = () => {
	return (
		<PageLayout>
			<FileViewer title='Hello World'>
				<Folder name='Components'>
					<File name='File1' language='diff'>
						{diff}
					</File>
					<File name='File2' />
					<Folder name='TreeView'>
						<File name='File1' language='jsx'>
							{exampleCode1}
						</File>
						<File name='File2'>{exampleCode2}</File>
						<Folder name='src'>
							<File name='File1'>Hello World</File>
							<File name='File2' />
							<Folder name='src'>
								<File name='File1' />
								<File name='File2' />
								<Folder name='src'>
									<File name='File1' />
									<File name='File2' />
								</Folder>
							</Folder>
						</Folder>
					</Folder>
				</Folder>
				<File name='File3' />
				<File name='File4' />
				<File name='File5' />
			</FileViewer>
		</PageLayout>
	)
}

export default Temp
