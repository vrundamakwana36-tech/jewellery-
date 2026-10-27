$nodePath = "c:\vrunda\EXAM APP\tools\node-v20.18.0-win-x64"
$userPath = [System.Environment]::GetEnvironmentVariable('Path', 'User')

if ([string]::IsNullOrWhiteSpace($userPath)) {
    [System.Environment]::SetEnvironmentVariable('Path', $nodePath, 'User')
    Write-Host "Set User PATH to: $nodePath"
} elseif (-not $userPath.Contains($nodePath)) {
    $newPath = "$userPath;$nodePath"
    [System.Environment]::SetEnvironmentVariable('Path', $newPath, 'User')
    Write-Host "Added $nodePath to User PATH successfully!"
} else {
    Write-Host "Node path already present in User PATH."
}
