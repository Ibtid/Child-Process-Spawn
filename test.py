
import sys


def child_process():
    # Send data back to the parent process
    message = f'hello'
    sys.stdout.write(message)
    sys.stdout.flush()


# Call the child process function
child_process()
