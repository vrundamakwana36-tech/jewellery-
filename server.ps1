param([int]$port = 8080)

$targetDir = Join-Path $PSScriptRoot "out"
if (-not (Test-Path $targetDir)) {
    $targetDir = $PSScriptRoot
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$port/")

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".woff2" = "font/woff2"
    ".txt"   = "text/plain; charset=utf-8"
}

try {
    $listener.Start()
    Write-Host "========================================================"
    Write-Host "  MAISON D'OR // Haute Joaillerie Showcase Server"
    Write-Host "  Ready at: http://127.0.0.1:$port/"
    Write-Host "========================================================"
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $req = $context.Request
        $res = $context.Response

        try {
            $relPath = $req.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($relPath) -or $relPath -eq "/") {
                $relPath = "index.html"
            }

            $localPath = Join-Path $targetDir $relPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)

            if (-not (Test-Path $localPath -PathType Leaf) -and (Test-Path (Join-Path $targetDir ($relPath + ".html")) -PathType Leaf)) {
                $localPath = Join-Path $targetDir ($relPath + ".html")
            }

            # Fallback 1: Check root /public folder
            if (-not (Test-Path $localPath -PathType Leaf)) {
                $publicPath = Join-Path (Join-Path $PSScriptRoot "public") $relPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
                if (Test-Path $publicPath -PathType Leaf) {
                    $localPath = $publicPath
                }
            }

            # Fallback 2: Check if request has 'public/' prefix
            if (-not (Test-Path $localPath -PathType Leaf) -and $relPath.ToLower().StartsWith("public/")) {
                $sub = $relPath.Substring(7).Replace('/', [System.IO.Path]::DirectorySeparatorChar)
                $cand1 = Join-Path $targetDir $sub
                $cand2 = Join-Path (Join-Path $PSScriptRoot "public") $sub
                if (Test-Path $cand1 -PathType Leaf) {
                    $localPath = $cand1
                } elseif (Test-Path $cand2 -PathType Leaf) {
                    $localPath = $cand2
                }
            }

            if (Test-Path $localPath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
                $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
                $res.ContentType = $contentType
                $res.AddHeader("Cache-Control", "no-cache")
                $res.AddHeader("Access-Control-Allow-Origin", "*")

                $bytes = [System.IO.File]::ReadAllBytes($localPath)
                $res.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $res.StatusCode = 404
                $err = [System.Text.Encoding]::UTF8.GetBytes("File Not Found: $relPath")
                $res.OutputStream.Write($err, 0, $err.Length)
            }
        } catch {
            Write-Host "Error serving: $_"
        } finally {
            $res.OutputStream.Close()
            $res.Close()
        }
    }
} catch {
    Write-Host "Server startup exception: $_"
} finally {
    $listener.Stop()
}
