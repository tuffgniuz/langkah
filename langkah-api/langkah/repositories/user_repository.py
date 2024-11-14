from sqlalchemy.orm import Session

from langkah.types.models import User


class UserRepository:
    def __init__(self, session: Session):
        self.session = session

    def get(self, user_id: str) -> User:
        return self.session.get(User, user_id)

    def create_user(self, user: User) -> User:
        self.session.add(user)
        self.session.commit()
        self.session.refresh(user)
        return user
