"""add content column in post table

Revision ID: 2c843f818fa9
Revises: 40ce38a12338
Create Date: 2022-02-03 20:03:35.116543

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2c843f818fa9'
down_revision = '40ce38a12338'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column(
        "posts",
        sa.Column("content", sa.String(), nullable=False)
    )


def downgrade():
    op.drop_column("posts", "content")
