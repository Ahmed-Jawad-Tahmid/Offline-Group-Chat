# WebSocket Server
# Author: Ahmed Jawad Tamid
# Date: Mar 24, 2025

import asyncio
import websockets

connected_clients = set()

async def handle_connection(websocket):
    # Register client
    connected_clients.add(websocket)
    try:
        async for message in websocket:
            print(f" {message}")
            await broadcast(message, websocket)
    except websockets.exceptions.ConnectionClosed:
        print(" A user disconnected.")
    finally:
        connected_clients.remove(websocket)

async def broadcast(message, sender):
    for client in connected_clients:
        try:
            await client.send(message)
        except:
            pass


async def main():
    print(" WebSocket Server running on 0.0.0.0:8000")
    async with websockets.serve(handle_connection, "0.0.0.0", 8000):
        await asyncio.Future()  # Run forever

if __name__ == "__main__":
    asyncio.run(main())
