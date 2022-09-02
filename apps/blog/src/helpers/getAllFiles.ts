import fs from 'fs'
import path from 'path'

const getAllFiles = function (dir: string, allFiles: string[]) {
	const files = fs.readdirSync(dir)

	allFiles = files || []

	files.forEach((file) => {
		if (fs.statSync(path.join(dir, file)).isDirectory()) {
			allFiles = getAllFiles(path.join(dir, file), allFiles)
		} else {
			allFiles.push(path.join(file))
		}
	})
	return allFiles
}

export default getAllFiles
