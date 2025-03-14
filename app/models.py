from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel
from typing import Optional

Base = declarative_base()


# defines the database model for symptom entries
class SymptomEntry(Base):
    __tablename__ = "symptoms"

    id = Column(Integer, primary_key=True, index=True)
    description = Column(String, nullable=True)


# defines the Pydantic model for symptom entry requests
class SymptomEntryRequest(BaseModel):
    issue_type: str
    description: Optional[str] = None
