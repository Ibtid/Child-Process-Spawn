
import sys


def child_process():
    # Read data from parent process
    data = sys.stdin.readline().rstrip()

    # Send data back to the parent process
    message = f'Hello from child! Received: {data}'
    sys.stdout.write(message)
    sys.stdout.flush()


# Call the child process function
child_process()
