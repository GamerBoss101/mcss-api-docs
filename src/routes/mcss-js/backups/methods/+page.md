---
title: Backups
---
The backups class is used to get information about the backups of a server. It is a sub class of the server class.

To create a backup you need to pass an object with the following properties:
- `name` (required) : string
- `destination` (required) : string
- `suspend`(optional) : boolean
- `deleteOldBackups` (optional) : boolean
- `compression` (optional) : object
- `runBackupAfterCreation` (optional): boolean
- `fileBlacklist` (optional) : string[]
- `folderBlacklist` (optional) : string[]

## Methods
- `server.backups.get(): Promise<AppResponse>` 
  - Used to get the backups of the server
- `server.backups.getBackup(): Promise<AppResponse>` 
  - Used to get a backup of the server
- `server.backups.create(): Promise<AppResponse>` 
  - Used to create a backup of the server
- `server.backups.update(): Promise<AppResponse>` 
  - Used to update a backup of the server
- `server.backups.delete(): Promise<AppResponse>` 
  - Used to delete a backup of the server
- `server.backups.run(): Promise<AppResponse>` 
  - Used to run a backup of the server

## Backup Builder

### Constructor
- `name: string` - name of the backup
- `destination: string` - destination of the backup

### Methods

- `backup.setName(name: string): Backup`
  - Sets the name of the backup
- `backup.setDestination(destination: string): Backup`
  - Sets the destination of the backup
- `backup.setSuspend(suspend: boolean): Backup`
  - Sets whether the backup is suspended
- `backup.setDeleteOldBackups(deleteOldBackups: boolean): Backup`
  - Sets whether old backups should be deleted
- `backup.setCompression(compression: object): Backup`
  - Sets the compression of the backup
- `backup.setRunBackupAfterCreation(runBackupAfterCreation: boolean): Backup`
  - Sets whether the backup should be run after creation
- `backup.setFileBlacklist(fileBlacklist: string[]): Backup`
  - Sets the file blacklist of the backup
- `backup.setFolderBlacklist(folderBlacklist: string[]): Backup`
  - Sets the folder blacklist of the backup
- `backup.addFileBlacklist(fileBlacklist: string[]): Backup`
  - Adds a file to the file blacklist of the backup
- `backup.removeFileBlacklist(fileBlacklist: string[]): Backup`
  - Removes a file from the file blacklist of the backup
- `backup.addFolderBlacklist(folderBlacklist: string[]): Backup`
  - Adds a folder to the folder blacklist of the backup
- `backup.removeFolderBlacklist(folderBlacklist: string[]): Backup`
  - Removes a folder from the folder blacklist of the backup
- `backup.toJSON(): object`
  - Returns the backup as a JSON object
