import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
} from "node:fs";
import path from "node:path";

export function compareNames(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

export function compareDirents(left, right) {
  return compareNames(left.name, right.name);
}

export function sortedDirectoryEntries(directory) {
  return readdirSync(directory, { withFileTypes: true }).sort(compareDirents);
}

export function walkFiles(directory, predicate = () => true, results = []) {
  if (!existsSync(directory)) return results;
  for (const entry of sortedDirectoryEntries(directory)) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walkFiles(target, predicate, results);
    else if (predicate(target)) results.push(target);
  }
  return results;
}

export function copyDirectoryContents(sourceDirectory, destinationDirectory) {
  if (!existsSync(sourceDirectory)) return;
  mkdirSync(destinationDirectory, { recursive: true });
  for (const entry of sortedDirectoryEntries(sourceDirectory)) {
    const source = path.join(sourceDirectory, entry.name);
    const destination = path.join(destinationDirectory, entry.name);
    if (entry.isDirectory()) copyDirectoryContents(source, destination);
    else cpSync(source, destination);
  }
}

export function toPosixPath(value) {
  return value.split(path.sep).join("/");
}
