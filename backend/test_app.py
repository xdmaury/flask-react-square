import unittest
from app import app


class TestApp(unittest.TestCase):
    def test_square(self):
        with app.test_client() as client:
            response = client.get('/square/5')
            data = response.get_json()
            self.assertEqual(data['result'], 25)


if __name__ == '__main__':
    unittest.main()
