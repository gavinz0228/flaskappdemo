import sys
from app.api import create_app

port = int(sys.argv[1])

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=port)