import os
import shutil
import subprocess
from pathlib import Path


def clean_caches(project_dir: Path) -> None:
    next_dir = project_dir / ".next"
    if next_dir.exists():
        print(f"Removing {next_dir}...")
        shutil.rmtree(next_dir, ignore_errors=True)

    local_app_data = os.getenv("LOCALAPPDATA")
    if local_app_data:
        htf_next = Path(local_app_data) / "Temp" / "htf-next"
        if htf_next.exists():
            print(f"Removing {htf_next}...")
            shutil.rmtree(htf_next, ignore_errors=True)


def ensure_dependencies(project_dir: Path) -> None:
    node_modules = project_dir / "node_modules"
    if node_modules.exists():
        return

    print("node_modules not found. Running 'npm install'...")
    subprocess.run(
        ["npm", "install"],
        cwd=project_dir,
        check=True,
        shell=True,
    )


def start_dev_server(project_dir: Path) -> None:
    print("Starting Next.js dev server with 'npm run dev'...")
    # Use shell=True so this works smoothly on Windows
    subprocess.run(
        "npm run dev",
        cwd=project_dir,
        shell=True,
        check=True,
    )


def main() -> None:
    project_dir = Path(__file__).resolve().parent
    print(f"Project directory: {project_dir}")

    try:
        clean_caches(project_dir)
        ensure_dependencies(project_dir)
        start_dev_server(project_dir)
    except subprocess.CalledProcessError as e:
        print(f"Command failed with exit code {e.returncode}")
        print("Command:", e.cmd)


if __name__ == "__main__":
    main()

