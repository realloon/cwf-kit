export async function getAllHandles(
  dirHandle: FileSystemDirectoryHandle,
  suffix: string
) {
  const allHandles: Array<FileSystemFileHandle> = []

  for await (const handle of dirHandle.values()) {
    if (handle.kind === 'file' && handle.name.toLowerCase().endsWith(suffix)) {
      allHandles.push(handle)
    } else if (handle.kind === 'directory') {
      const nestedHandles = await getAllHandles(handle, suffix)
      allHandles.push(...nestedHandles)
    }
  }

  return allHandles
}
